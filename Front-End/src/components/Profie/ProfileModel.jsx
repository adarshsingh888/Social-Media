import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function ProfileModel({modelOpened,setModelOpened}) {
   

  return (
    <>
      <Modal 
      opened={modelOpened} 
      onClose={()=> setModelOpened(false)} 
      title="Edit Profile Info" 
      centered>
        <Form/>
      </Modal>

    
    </>
  );
}
function Form() {
    return (
      <div className="  flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">

          <form>
            <div className="flex gap-4 mb-4">
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                className=" w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                className=" w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div className="flex gap-4 mb-4">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="password"
                name="confirmpassword"
                placeholder="Confirm Password"
                className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
           
            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
            >
              Submite
            </button>
          </form>
        </div>
      </div>
    );
  }
export default ProfileModel; 