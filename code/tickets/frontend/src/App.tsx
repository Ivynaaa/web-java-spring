import {Button} from "@/components/ui/button.tsx";
import ListUsers from "@/pages/users/ListUsers.tsx";

function App() {

  return (
    <>
    <h1 className="text-3xl font-bold, text-center mt-20">Sistema de Vendas de Tickets</h1>

      <Button className="mt-10 mx-auto block">Login</Button>

      <ListUsers/>
    </>
  )
}

export default App
