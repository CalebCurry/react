import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import DefinitionSearch from '../components/DefinitionSearch';
import NotFound from '../components/NotFound';
import useFetch from '../hooks/UseFetch';

export default function Definition() {
    //const [word, setWord] = useState();
    //const [notFound, setNotFound] = useState(false);
    //const [error, setError] = useState(false);
    let { search } = useParams();

    const location = useLocation();
    const navigate = useNavigate();
    const {
        request,
        data: [{ meanings: word }] = [{}],
        errorStatus,
    } = useFetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search);

    useEffect(() => {
        request();
    }, [search]);

    if (errorStatus === 404) {
        return (
            <>
                <NotFound />
                <Link to="/dictionary">Search another</Link>
            </>
        );
    }

    if (errorStatus) {
        return (
            <>
                <p>There was a problem with the server, try again later.</p>
                <Link to="/dictionary">Search another</Link>
            </>
        );
    }

    return (
        <>
            {word ? (
                <>
                    <h1>Here is a definition:</h1>
                    {word.map((meaning) => {
                        return (
                            <p key={uuidv4()}>
                                {meaning.partOfSpeech + ': '}
                                {meaning.definitions[0].definition}
                            </p>
                        );
                    })}
                    <p>Search again:</p>
                    <DefinitionSearch />
                </>
            ) : null}
        </>
    );
}
