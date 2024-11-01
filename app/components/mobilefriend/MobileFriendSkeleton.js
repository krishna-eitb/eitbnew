// components/skeletons/MobileFriendSkeleton.js
import React from 'react';

const MobileFriendSkeleton = () => (
  <div className="animate-pulse flex items-center space-x-4 p-6 bg-gray-200 rounded-lg">
    <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
    <div className="flex-1 space-y-2">
      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
    </div>
  </div>
);

export default MobileFriendSkeleton;
