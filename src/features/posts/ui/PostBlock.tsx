import { NavLink } from "react-router";
import type { Post } from "../postsApi";

export const PostBlock = ({ title, body, author }: Post) => {
  return (
    <NavLink to={"/"}>
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 mb-4">
        <div className="flex items-center ">
          <div>
            <div className="font-semibold text-gray-800">{author}</div>
            <div className="text-xs text-gray-500">2 hours ago</div>
          </div>
        </div>
        <div className="mt-2 mb-4">
          <div className="text-gray-800 font-bold">{title}</div>
          <div className="text-gray-700">{body}</div>
        </div>

        <div className="flex space-x-4 text-gray-500 text-sm">
          <button className="hover:text-blue-500">Like</button>
          <button className="hover:text-blue-500">Comment</button>
          <button className="hover:text-blue-500">Share</button>
        </div>
      </div>
    </NavLink>
  );
};
