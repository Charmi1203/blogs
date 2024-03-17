import { PostMetadata } from "./PostMetadata";
import Link from "next/link";

const PostPreview = (props: PostMetadata) => {
    return (
        <div className="border border-slate-300 rounded-md p-4 shadow-md bg-white">
            <p className="text-sm text-slate-400">{props.date}</p>
            <Link href={`/posts/${props.slug}`}>
                <h2 className="hover:underline text-violet-600 mb-4">
                {props.title}
                </h2>
            </Link>
            <p className="text-slate-700">{props.subtitle}</p>
        </div>
    );
};

export default PostPreview;