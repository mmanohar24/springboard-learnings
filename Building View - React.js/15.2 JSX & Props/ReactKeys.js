// React JS Lists and Keys

const programmingLanguages = [
    { language: 'JavaScript', devs: '1234' },
    { language: 'Python', devs: '5678' },
    { language: 'Dart', devs: '9012' },
    { language: 'Rust', devs: '3456' },
    { language: 'Assembly', devs: '7890' },
    { language: 'Java', devs: '0123' },
    { language: 'Ruby', devs: '4567' },
    { language: 'C++', devs: '8901' },
];

const ProgrammingLanguages = () => {
    return (
        <>
            <ul> {programmingLanguages.map(data => (
                <li key = {data.language}>
                    <b> The programming language is : </b> {data.language} and it's <b> Current Developers: </b>{data.devs}
                </li>
            ))
            }
            </ul>
        </>
    )
}