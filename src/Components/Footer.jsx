import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
    return (
        <>
            <footer className="relative flex flex-col gap-3 bg-slate-600 bottom-0 inset-0 w-full rounded-sm justify-start py-4">
                <p className="font-mono flex justify-center text-slate-200">
                    &copy; 2024 SnapMart. All rights reserved.
                </p>
                
                {/* Icons Section */}
                <div className="flex justify-center gap-4 text-slate-200">
                    <a href="www.linkedin.com/in/bhanu-prakash-906448306" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" className="hover:text-blue-400 transition-colors duration-300"/>
                    </a>
                    <a href="https://github.com" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x" className="hover:text-gray-400 transition-colors duration-300"/>
                    </a>
                </div>

                {/* Duplicated Text */}
                <div className="px-4 text-slate-200 flex justify-center text-center mt-4">
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at quam ultricies, malesuada sapien id, laoreet arcu. Donec euismod dolor non magna auctor, vel luctus risus auctor. Proin at felis ac ligula congue luctus non ut purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at quam ultricies, malesuada sapien id, laoreet arcu.
                    </p>
                </div>
            </footer>
        </>
    );
}
