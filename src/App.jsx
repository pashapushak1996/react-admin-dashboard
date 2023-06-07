import './App.css';
import { AsideMenu } from "../components/aside-menu/AsideMenu.jsx";
import { Outlet } from "react-router-dom";
import { CCol, CContainer, CRow } from "@coreui/react";

function App() {
    return (
        <CContainer fluid className={ 'app' }>
            <CRow className={ 'app__body' }>
                <CCol md={ 3 }>
                    <AsideMenu/>
                </CCol>
                <CCol md={ 9 }>
                    <Outlet/>
                </CCol>
            </CRow>
        </CContainer>
    )
}

export default App
