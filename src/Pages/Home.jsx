import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserName, updatePhone, updateEmail } from '../redux/UserSlice';
import { useNavigate} from 'react-router-dom';

export function Home() {
  const [userName, setUserName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  // const navigation=useNavigation();
  // const isSubmitting = navigation.state === 'submitting';
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserName(userName));
    dispatch(updatePhone(phone));
    dispatch(updateEmail(email));
    navigate('/mainmenu');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-10/12">
        <h1 className="font-semibold text-2xl text-center mb-6">
          Welcome to SnapMart! Get Your Products At Your DoorStep
        </h1>   

        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <label className="text-gray-700 font-medium">Enter The Name Of The User</label>
          <input
            type="text"
            placeholder="Eg. Bhanu Prakash"
            className="py-2 px-4 text-gray-700 rounded-md focus:ring-2 border-2 hover:ring-2 ring-purple-500 focus:border-0"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />

          <label className="text-gray-700 font-medium">Enter The Phone Number</label>
          <input
            type="text"
            placeholder="1234567890"
            className="py-2 px-4 text-gray-700 rounded-md  border-2 focus:ring-2 hover:ring-2 ring-purple-500   focus:border-0"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <label className="text-gray-700 font-medium">Enter The Email</label>
          <input
            type="email"
            placeholder="eg@gmail.com"
            className="py-2 px-4 text-gray-700 rounded-md border-2 focus:ring-2 hover:ring-2 ring-purple-500 focus:border-0"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            type="submit"
            className="bg-purple-500 text-white py-2 px-4 rounded-md hover:ring-2 hover:bg-purple-700"
          >
            Submit
          </button>
        </form>
     
      </div>
    </div>
  );
}
