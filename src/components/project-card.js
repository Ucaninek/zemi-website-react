import { v4 as uuidv4 } from 'uuid';
import Viewer from 'react-viewer';
import Tag from './tag.js';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useState } from 'react';

function ProjectCard({ title, desc, github, image, tags }) {
    var git = '';
    if (github !== undefined) {
        git = github;
    }
    const [visible, setVisible] = useState(false);
    return (
        <div className="project-container" key={uuidv4().toString()}>
            <div className="bg-gray-100 dark:bg-slate-800 px-8 py-10 rounded-md grow shrink">
                <h2 className="font-medium text-gray-700 dark:text-gray-200 text-xl mb-1">{title} {(git === '') ? '' : <a href={github} className="underline text-sm">Github</a>}</h2>
                <div className="tag-container">
                    {
                        tags.map(({ text, classes }) => (
                            <Tag text={text} classes={classes} />
                        ))
                    }
                </div>
                <div className="max-w-lg">
                    <LazyLoadImage src={image} alt={title} className="mb-8" onClick={() => { setVisible(true); }} />
                    <div>
                        <Viewer
                            visible={visible}
                            rotatable={false}
                            scalable={false}
                            changeable={false}
                            zoomable={false}
                            drag={false}
                            onClose={() => { setVisible(false); }}
                            images={[{ src: image, alt: title }]}
                        />
                    </div>
                </div>
                <p className="font-normal text-gray-500 dark:text-gray-300 text-md">{desc}</p>
            </div>
        </div>
    );
}

export default ProjectCard;