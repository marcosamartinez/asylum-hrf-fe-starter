import { useAuth0 } from '@auth0/auth0-react';

/**
 * TODO: Ticket 3:
 * Implement authentication using Auth0:
 * - Get the user data from Auth0
 * - Create and style the component
 * - Display the data
 * - Make this page a protected Route
 */
const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className='text-center p-4'>Loading...</div>;
  }

  if (!isAuthenticated || !user) {
    return (
      <div className='flex-c items-center justify-center min-h-[40vh] p-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold text-[#60a5fa] mb-4'>Not Authenticated</h2>
          <p className='text-lg text-[#60a5fa]'>Please log in to view your profile.</p>
        </div>
      </div>
    );
  }

  return (
    <div className='flex-c items-center justify-center py-8 px-8'>
      <div className='bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full'>
        <h1 className='text-4xl font-bold text-[#60a5fa] mb-8 text-center'>Profile</h1>
        
        <div className='flex flex-col items-center mb-6'>
          {user.picture && (
            <img 
              src={user.picture} 
              alt={user.name || 'Profile'} 
              className='w-32 h-32 rounded-full mb-4'
            />
          )}
          <h2 className='text-2xl font-semibold text-[#60a5fa] mb-2'>{user.name}</h2>
          {user.email && (
            <p className='text-lg text-[#666]'>{user.email}</p>
          )}
        </div>

        <div className='border-t border-gray-200 pt-6'>
          <h3 className='text-xl font-semibold text-[#60a5fa] mb-4'>Account Information</h3>
          <div className='space-y-3'>
            {user.nickname && (
              <div className='flex justify-between'>
                <span className='font-medium text-[#666]'>Nickname:</span>
                <span className='text-[#60a5fa]'>{user.nickname}</span>
              </div>
            )}
            {user.email_verified !== undefined && (
              <div className='flex justify-between'>
                <span className='font-medium text-[#666]'>Email Verified:</span>
                <span className={`${user.email_verified ? 'text-green-600' : 'text-red-600'}`}>
                  {user.email_verified ? 'Yes' : 'No'}
                </span>
              </div>
            )}
            {user.sub && (
              <div className='flex flex-col'>
                <span className='font-medium text-[#666] mb-1'>User ID:</span>
                <span className='text-[#60a5fa] text-sm break-all'>{user.sub}</span>
              </div>
            )}
            {user.updated_at && (
              <div className='flex justify-between'>
                <span className='font-medium text-[#666]'>Last Updated:</span>
                <span className='text-[#60a5fa]'>{new Date(user.updated_at).toLocaleDateString()}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
