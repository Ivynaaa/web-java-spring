import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ListEvents from "./pages/events/ListEvent";
import EventForm from "./pages/events/EventForm";
import ListSales from "@/pages/sales/ListSales.tsx";
import SaleForm from "@/pages/sales/SaleForm.tsx";
import AppHeader from "./components/AppHeader";

import type { JSX } from "react";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const user = localStorage.getItem("@EventPass:user");
    return user ? children : <Navigate to="/" />;
};

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rota Principal*/}
                <Route
                    path="/home"
                    element={
                        <PrivateRoute>
                            <>
                                <AppHeader title="Painel Principal" />
                            </>
                        </PrivateRoute>
                    }
                />

                {/* Rota de Eventos */}
                <Route
                    path="/events"
                    element={
                        <PrivateRoute>
                            <>
                                <AppHeader title="Gerenciamento de Usuários" />
                                <ListEvents />
                            </>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/events/new"
                    element={
                        <PrivateRoute>
                            <>
                                <AppHeader title="Gerenciamento de Usuários" />
                                <EventForm />
                            </>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/events/edit/:id"
                    element={
                        <PrivateRoute>
                            <>
                                <AppHeader title="Gerenciamento de Usuários" />
                                <EventForm />
                            </>
                        </PrivateRoute>
                    }
                />
                {/* Rota de Vendas */}
                <Route
                    path="/sales"
                    element={
                        <PrivateRoute>
                            <>
                                <AppHeader title="Gerenciamento de Usuários" />
                                <ListSales />
                            </>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/sales/new"
                    element={
                        <PrivateRoute>
                            <>
                                <AppHeader title="Gerenciamento de Usuários" />
                                <SaleForm />
                            </>
                        </PrivateRoute>
                    }
                />

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
};