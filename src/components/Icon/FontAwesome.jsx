import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFontAwesome,
    faFaceAngry,
    faFaceFrownOpen,
    faFaceMeh,
    faFaceSmile,
    faFaceGrinHearts,
} from "@fortawesome/free-solid-svg-icons";

const FontAwesome = ({ icon, size, color, bounce }) => {
    if (size === undefined) {
        size = "2x";
    }

    var faIcon;

    switch (icon) {
        case "1":
            faIcon = faFaceAngry;
            break;
        case "2":
            faIcon = faFaceFrownOpen;
            break;
        case "3":
            faIcon = faFaceMeh;
            break;
        case "4":
            faIcon = faFaceSmile;
            break;
        case "5":
            faIcon = faFaceGrinHearts;
            break;
        default:
            faIcon = faFontAwesome;
            break;
    }

    return (
        <>
            <FontAwesomeIcon icon={faIcon} size={size} color={color} bounce={bounce} />
        </>
    );
};

export default FontAwesome;
