import React from 'react';
import { useRouteError } from 'react-router';
import Style from "./ErrorPage.module.css";

function ErrorPage() {
    const error = useRouteError();

    return (
        <div>
            <h1>Oops! Algo deu errado.</h1>
            <p>Desculpe, ocorreu um erro inesperado.</p>
            {error && (
                <div>
                    <p><strong>Detalhes do erro:</strong></p>
                    <p>{error.status ? `Status: ${error.status}` : null}</p>
                    <p>{error.statusText || error.message}</p>
                </div>
            )}
        </div>
    );
}

export default ErrorPage;