import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

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
        })
    }

    login(email: string, password: string){
        return this.http.post<AuthLoginResponseData>(`${API_URL}/auth/signin`,{
            email,
            password
        })
    }
}