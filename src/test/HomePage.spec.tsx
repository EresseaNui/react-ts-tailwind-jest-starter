import "@testing-library/jest-dom";
import { cleanup, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { HomePage } from "../pages";

describe("Test sur la page DashboardUsers", () => {
    let container: HTMLElement;

    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(cleanup);

    test("Le composant doit fournir un rendu", () => {
        render(
            <BrowserRouter>
                <HomePage />
            </BrowserRouter>
        );
    });
});
