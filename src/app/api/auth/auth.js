import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/"
    },
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({

            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "John@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }
                const existingUser = await prisma.user.findUnique({
                    where: {
                        email: credentials?.email
                    }
                })
                if (!existingUser) {
                    return null;
                }
                if (credentials?.password !== existingUser.password) {
                    return null
                }
                return {
                    id: existingUser.id,
                    name: existingUser.name,
                    email: existingUser.email,
                    role: existingUser.role,
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                return {
                    ...token,
                    id: user.id,
                    name: user.name,
                    role: user.role,
                };
            }
            return token;
        },
        async session({ session, token }) {
            // console.log(session)
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    name: token.name,
                    email: token.email,
                    role: token.role,
                }
            };
        }
    }


}