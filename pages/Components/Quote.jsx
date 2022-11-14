import { useEffect, useState } from "react";
import styles from "./Quote.module.css";
const Quote = () => {
    const [randomQuote, setRandomQuote] = useState([]);
    const [msg, setMessage] = useState("");
    const rfqURL = "https://jarvis-ank.github.io/Refresh-Quotes/";

    const url = "https://type.fit/api/quotes";
    useEffect(() => {
        getQuote();
    }, []);
    useEffect(() => {
        var str = '"' + randomQuote.text + '"' + ' --' + randomQuote.author + '';
        console.log(typeof (str) + str)
        setMessage(str)
    }, [randomQuote])
    const getQuote = async () => {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        const random = data[Math.floor(Math.random() * data.length)];
        console.log(random)
        setRandomQuote(random);

    }

    return (
        <>
            <p className={styles.quote} id="quotation">&ldquo;{randomQuote.text}&ldquo;</p>
            <footer>
                <p className={styles.author} id="source">-- {randomQuote.author}</p>
            </footer>{console.log(msg)}
            <div className="row align-items-center">
                <a className="mx-3 col-1 text-center" href={`http://twitter.com/share?text=${msg}&url=${rfqURL}&hashtags=RefreshQuotes`}> <i className={`fa fa-share fa-beat`}></i> </a>
                <a className="col" onClick={getQuote}> <i className={`fa fa-refresh fa-spin `}></i> </a>
            </div>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

        </>)
}

export default Quote
