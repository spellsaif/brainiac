import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github"

export const authOption: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        })
    ],

    secret: process.env.NEXTAUTH_SECRET as string
}