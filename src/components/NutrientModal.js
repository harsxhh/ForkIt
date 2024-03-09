import React from 'react';

function NutrientModal({ data, onClose }) {
    console.log("Closd",onClose);
    return (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{data.generic_name}</h5>
                        {/* <button type="button" className="close" aria-label="Close" onClick={onClose}>
                            <span aria-hidden="true">&times;</span>
                        </button> */}
                    </div>
                    <div className="modal-body">
                        <div>
                            <p>Calories: {data?.Calories}</p>
                            <p>Protein: {data['Protein (g)']}</p>
                            <p>Carbohydrates: {data['Carbohydrate, by difference (g)']}</p>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NutrientModal;
