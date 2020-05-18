import {useHistory} from "react-router-dom";
import {XtdEntity} from "../types";
import {route} from "../utils";

export default function useEntityRoute() {
    const history = useHistory();
    return (entity: XtdEntity) => {
        history.push(`${route(entity.__typename)}/${entity.id}`);
    };
}
