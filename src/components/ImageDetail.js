import React from 'react';

const ImageDetail = ({match}) => {
    return(
        <div className="container">
            <img alt="Detail description" src={window.atob(match.params.url)} />
        </div>
    )
};

export default ImageDetail;
