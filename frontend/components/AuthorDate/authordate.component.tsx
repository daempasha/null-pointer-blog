import moment from "moment";

interface iAuthorDate {
  author: string;
  date: number;
}

export const AuthorDate = ({ author, date }: iAuthorDate) => (
  <div className="flex items-center text-sm">
    <a className="text-blue-600 dark:text-blue-500 font-bold">{author}</a>
    <span className="mx-1 text-gray-400 ">|</span>
    <span className=" text-gray-600 dark:text-gray-400">{moment(date).format("D MMM YYYY")}</span>
  </div>
);
