const Visibility = ({visible, children}) => {
    if(visible) {
        return (
            <div>
                {children}
            </div>
        );
    }
}

export default Visibility;