import {useHistory} from "react-router-dom";
import {route} from "../utils";
import {CatalogItemFragment} from "../generated/types";

export default function useEntityRoute() {
    const history = useHistory();
    return (entity: CatalogItemFragment) => {
        history.push(`${route(entity.__typename)}/${entity.id}`);
    };
}
