import NextAuth from "next-auth/next"
import FacebookProvider from "next-auth/providers/facebook"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
    providers: [
        FacebookProvider({
            clientId:process.env.FACEBOOK_CLIENT_ID,
            clientSecret:process.env.FACEBOOK_CLIENT_SECRET
        }),
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET
        }),

    ],

    callbacks: {
        async session({session}){
            return session
        },

        async signIn({profile}){
            return profile
        }
    }
  
})

export { handler as GET, handler as POST }