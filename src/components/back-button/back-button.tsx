import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function BackButton() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    return (
        <Button
            variant="contained"
            startIcon={<ArrowBackIcon/>}
            sx={{display: 'flex'}}
            onClick={goBack}
        >
            Назад
        </Button>
    )
}

export default BackButton;