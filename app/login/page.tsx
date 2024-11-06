import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";

const LoginPage = () => {
    return (
        <div className="grid h-full grid-cols-2">
            {/*Esquerda */}
            <div className="flex flex-col justify-center h-full p-8 max-w-[550px] mx-auto">
                <Image src="/logo.svg" alt="Logo Finance AI" width={173} height={39} className="mb-8"/>
                <h1 className="text-4xl font-bold mb-3">Bem-Vindo</h1>
                <p className="text-muted-foreground mb-8">A Finance AI é uma plataforma de gestão financeira que utiliza IA para monitorar suas movimentações, e oferecer insights personalizados, facilitando o controle do seu orçamento.</p>
                <Button variant="outline">
                    <LogInIcon className="mr-2" />
                    Fazer login ou Cria conta
                </Button>
            </div>

            {/*Direita */}
            <div className="relative w-full h-full">
                <Image src="/login.png" alt="Faça login" fill className="object-cover" />
            </div>
        </div>
    );
}

export default LoginPage;