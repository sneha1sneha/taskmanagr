import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, NavigationEnd, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';
import { Logger } from '@shared';
import { Observable } from 'rxjs';
import { CredentialsService } from './credentials.service';

const log = new Logger('AuthenticationGuard');

export class RoleGuard {

    static forRoles(roles: number) {
        @Injectable({
            providedIn: 'root',
        })

        class RoleCheck implements CanActivate {

            constructor(private router: Router, private credentialsService: CredentialsService) {
                this.router.events
                    .pipe(filter((evt: any) => evt instanceof RoutesRecognized), pairwise())
                    .subscribe((events: RoutesRecognized[]) => {
                        console.log('previous url', events[0].urlAfterRedirects);
                        console.log('current url', events[1].urlAfterRedirects);
                        /// this.previousUrl = events[1].urlAfterRedirects;
                    });
            }
            canActivate(
                route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot
            ): Observable<boolean> | Promise<boolean> | boolean {
                if (this.credentialsService.isAuthenticated() && roles === this.credentialsService.getUserRole()) {
                    return true;
                }

                log.debug('Not authenticated, redirecting and adding redirect url...');
                this.router.navigate(['/'], { queryParams: { redirect: state.url }, replaceUrl: true });
                return false;
            }
        }

        return RoleCheck;
    }
}