import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
            It is root jsx
            <Outlet></Outlet>
        </div>
    );
};

export default Root;