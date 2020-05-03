import {
    ViewContainerRef, ReflectiveInjector, Injectable,
    Type, ComponentRef, ComponentFactoryResolver
} from '@angular/core';
import { Observable, Subject, ReplaySubject } from 'rxjs';

@Injectable()
export class ModalService {
    private viewContainerRef: ViewContainerRef;
    public activeInstances: number;
    activeInstances$: Subject<number> = new Subject();
    modalRef: ComponentRef<any>[] = [];

    constructor(private resolver: ComponentFactoryResolver) {
    }

    RegisterContainerRef(vcRef: ViewContainerRef) {
        this.viewContainerRef = vcRef;
    }

    open<T>(component: Type<T>, parameters?: Object):
        Observable<ComponentRef<T>> {

        const componentRef$ = new ReplaySubject();

        const injector = ReflectiveInjector.fromResolvedProviders([],
            this.viewContainerRef.parentInjector);
        const factory = this.resolver.resolveComponentFactory(component);
        const componentRef = factory.create(injector);

        this.viewContainerRef.insert(componentRef.hostView);
        Object.assign(componentRef.instance, parameters);
        this.activeInstances++;
        this.activeInstances$.next(this.activeInstances);
        componentRef.instance['componentIndex'] = this.activeInstances;
        componentRef.instance['destroy'] = () => {
            this.activeInstances--;
            this.activeInstances = Math.max(this.activeInstances, 0);

            const idx = this.modalRef.indexOf(componentRef);
            if (idx > -1) {
                this.modalRef.splice(idx, 1);
            }
            this.activeInstances$.next(this.activeInstances);
            componentRef.destroy();
        };

        this.modalRef.push(componentRef);
        componentRef$.next(componentRef);
        componentRef$.complete();
        return <Observable<ComponentRef<T>>>componentRef$.asObservable();
    }
}
