import { createRoot } from "react-dom/client";
import HelloWorld from "./Helloworld"; 
import Container from "./Container";
import ArtikelDetail from "./ArtikelDetail";
import './custom.css';
// Sesuaikan dengan nama file yang dibuat

createRoot(document.getElementById("root"))
    .render(
        <div>
            <Container>
                <HelloWorld/>
            </Container>
            <ArtikelDetail/>
        </div>
    )