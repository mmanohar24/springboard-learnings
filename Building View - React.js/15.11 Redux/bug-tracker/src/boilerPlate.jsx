import { compose, pipe } from 'lodash/fp';

const BoilerPlate = () => {

    let input = "    JavaScript    ";

    const trim = str => str.trim();
    const wrap = type => str => `<${type}> ${str} </${type}>`
    const toLowerCase = str => str.toLowerCase();

    const tranform = pipe(trim, toLowerCase, wrap("span"));

    return (
        <div>
            {
                tranform(input)
            }
        </div>
    )
}

export default BoilerPlate
