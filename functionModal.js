function modalFunction(){
    const[show, setShow] =useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <Button variant="info" onClike={handleShow}>
                Confirm Appointment
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.header closeButton>
                    <Modal.Title>Appointment Booked!</Modal.Title>
                </Modal.header>
                <Modal.body>Your appointment has been booked, you will receive an email with your booking info shortly.</Modal.body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        close
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}
render(<modalFunction />);


function functionName(){
    alert("You are learning how to call JAVASCRIPT");
}

