import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const TaskCard = ({ tasks }) => {


    const handleDelete = () => {
     
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`https://task-canvas-server.vercel.app/tasks/${tasks?._id}`,{
                method: 'DELETE'
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                  Swal.fire("Deleted!", "Your file has been deleted.", "success");
                  window.location.reload();
                }
              });
          }
        });
      };
   

  return (
    <div>
      <div className=" w-full my-4 whitespace-normal break-words rounded-lg border border-blue-gray-50 bg-white p-4 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
        <div className="mb-2 flex items-center gap-3">
          <h2 className="block font-sans text-black text-base font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased transition-colors hover:text-pink-500">
            {tasks?.title}
          </h2>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="-mt-0.5 h-4 w-4 text-yellow-400"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p className="block font-sans text-xs font-normal text-gray-700 antialiased">
              {tasks?.priority}
            </p>
          </div>
        </div>
        <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
          {tasks?.description}
        </p>
        <div className="mt-4 flex items-end gap-5">
          <div className=" rounded-full bg-purple-500 py-1 px-2 align-baseline font-sans text-xs font-medium  text-white">
            <Link to={`/taskupdate/${tasks?._id}`}>
            <button className="mt-px">Update</button>
            </Link>
          </div>
          <div className=" rounded-full bg-purple-500 py-1 px-2 align-baseline font-sans text-xs font-medium  text-white">
            <button onClick={handleDelete} className="mt-px">Delete</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
