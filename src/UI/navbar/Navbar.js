
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min';

const navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger ">
            <div className="text-white font-weight-bold pt-2 pb-2 mx-auto">
                WLM Requirements
            </div>
        </nav>
    );
}

export default navbar;