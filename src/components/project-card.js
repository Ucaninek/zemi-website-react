import { v4 as uuidv4 } from 'uuid';
import Tag from './tag.js';

function ProjectCard({ title, desc, github, image, tags }) {
    console.log(uuidv4().toString());
    var git = '';
    if (github !== undefined) {
        git = github;
    }
    return (
        <>
            <div className="project-container" key={uuidv4().toString()}>
                <div className="bg-gray-100 px-8 py-10 rounded-md grow shrink">
                    <h2 className="font-medium text-gray-700 text-xl mb-1">{title} {(git === '') ? '' : <a href={github} className="underline text-sm">Github</a>}</h2>
                    <div className="tag-container">
                        {
                            tags.map(({ text, classes }) => (
                                <Tag text={text} classes={classes} />
                            ))
                        }
                    </div>
                    <div className="max-w-lg">
                        <img src={image} alt={title} className="mb-8" />
                    </div>
                    <p className="font-normal text-gray-500 text-md">{desc}</p>
                </div>
            </div>
        </>
    );
}

export default ProjectCard;