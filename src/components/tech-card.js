import { v4 as uuidv4 } from 'uuid';
import Tag from './tag.js';

function techCard({ name, desc, usingFor, tags }) {
    return (
        <div className="tech-container" key={uuidv4().toString()}>
            <div className="bg-gray-100 px-8 py-10 rounded-md grow shrink">
                <div className="tag-container">
                    <span className="font-medium text-gray-700 text-xl mb-1">{name}</span>
                    {
                        tags.map(({ text, classes }) => (
                            <Tag text={text} classes={classes} />
                        ))
                    }
                </div>
                <span class="text-amber-400 text-semibold">{usingFor}</span>
                <p className="font-normal text-gray-500 text-md">{desc}</p>
            </div>
        </div>
    )
}

export default techCard;