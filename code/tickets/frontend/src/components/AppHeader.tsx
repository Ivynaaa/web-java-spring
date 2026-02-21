import Menu from "./Menu";

interface AppHeaderInterface {
    title?: string;
}

const AppHeader = ({ }: AppHeaderInterface) => {
    return (
        <header className="bg-red-900 shadow-md p-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-extrabold tracking-tight text-white">
                        Vendas de Ingressos
                    </h1>
                </div>

                {/* Menu da aplicação */}
                <Menu />
            </div>
        </header>
    );
};

export default AppHeader;