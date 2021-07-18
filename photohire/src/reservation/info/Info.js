import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { profiles } from '../../catalog/Catalog'; 
function Info () {
    const { id } = useParams();
    const [profile, setProfile] = useState(null);
    const history = useHistory();

    useEffect(() => {
        profiles.forEach(p => {
            if (p.id === id) { 
                setProfile(p);
            } 
        });
    }, [id]);

    return (
        profile &&
            <div>
                <p>Info {profile.id}</p>
            </div>
    );
}

export default Info;