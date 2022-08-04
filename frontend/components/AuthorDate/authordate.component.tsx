import moment from "moment";

interface iAuthorDate {
  author: string;
  date: number;
}

export const AuthorDate = ({ author, date }: iAuthorDate) => (
  <div className="flex items-center text-sm">
    <a className="text-blue-600 font-bold">{author}</a>
    <span className="mx-1 text-gray-400">|</span>
    <span className=" text-gray-600">
      {moment(date, "X").format("D MMM YYYY")}
    </span>
  </div>
);
