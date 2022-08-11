import { LazyLoadImage } from 'react-lazy-load-image-component';
import { v4 as uuidv4 } from 'uuid';
import Tag from './tag.js';
function techCard({ name, desc, usingFor, tags, image }) {
    return (
        <div className="tech-container" key={uuidv4().toString()}>
            <div className="bg-gray-100 p-5 rounded-md grow shrink">
                <div className="flex items-center justify-between gap-5">
                    <div className="rounded-md overflow-hidden">
                        <LazyLoadImage src={image} alt={name} />
                    </div>
                    <div>
                        <div className="tag-container">
                            <span className="font-medium text-gray-700 text-2xl">{name}</span>
                            {
                                tags.map(({ text, classes }) => (
                                    <Tag text={text} classes={classes} />
                                ))
                            }
                            <span class="text-amber-400 text-xl font-semibold">{usingFor}</span>
                        </div>
                        <p className="font-normal text-gray-500 text-md">{desc}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default techCard;