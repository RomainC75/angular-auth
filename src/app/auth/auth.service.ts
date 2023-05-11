import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

interface AuthLoginResponseData{
    message: string
}

interface AuthSignupResponseData{
    userId: string
    token: string
}

const API_URL="http://localhost:5010"

@Injectable({providedIn: 'root'})
export class AuthService{
    constructor(private http: HttpClient){
    }

    signup(email: string, password: string){
        return this.http.post<AuthSignupResponseData>(`${API_URL}/auth/signup`,{
            firstname:"sponge",
            lastname:"bob",
            email,
            password
        }).pipe(
            catchError(errorRes=>{
                if(!errorRes.error || !errorRes.error.message){
                    return throwError('unknown error')
                }
                return throwError(errorRes.error.message)
            })
        )
    }

    login(email: string, password: string){
        return this.http.post<AuthLoginResponseData>(`${API_URL}/auth/signin`,{
            email,
            password
        })
    }
}