export const API_BASE_URL = "https://christful-backend.vercel.app";

export const ENDPOINTS = {
    // Auth
    LOGIN: `${API_BASE_URL}/login`,
    REGISTER: `${API_BASE_URL}/register`,
    GOOGLE_OAUTH: `${API_BASE_URL}/google-auth`,
    RESET_PASSWORD: `${API_BASE_URL}/reset-password`,
    FORGOT_PASSWORD: `${API_BASE_URL}/forgot-password`,
    ME: `${API_BASE_URL}/auth/me`,
    PROFILE: `${API_BASE_URL}/profile`,
    
    // Users
    USERS: `${API_BASE_URL}/users`,
    FOLLOW: (userId: string) => `${API_BASE_URL}/users/${userId}/follow`,
    FOLLOWERS: (userId: string) => `${API_BASE_URL}/users/${userId}/followers`,
    FOLLOWING: (userId: string) => `${API_BASE_URL}/users/${userId}/following`,
    FOLLOW_STATUS: (userId: string) => `${API_BASE_URL}/users/${userId}/follow-status`,
    
    // Posts
    POSTS: `${API_BASE_URL}/posts`,
    POST_DETAIL: (postId: string) => `${API_BASE_URL}/posts/${postId}`,
    LIKE_POST: (postId: string) => `${API_BASE_URL}/posts/${postId}/like`,
    
    // Comments
    COMMENTS: (postId: string) => `${API_BASE_URL}/posts/${postId}/comments`,
    COMMENT_DETAIL: (commentId: string) => `${API_BASE_URL}/comments/${commentId}`,
    COMMENT_REPLIES: (commentId: string) => `${API_BASE_URL}/comments/${commentId}/replies`,
    LIKE_COMMENT: (commentId: string) => `${API_BASE_URL}/comments/${commentId}/like`,
    
    // Communities
    COMMUNITIES: `${API_BASE_URL}/communities`,
    COMMUNITY_DETAIL: (communityId: string) => `${API_BASE_URL}/communities/${communityId}`,
    COMMUNITY_SEARCH: `${API_BASE_URL}/communities/search`,
    JOIN_COMMUNITY: (communityId: string) => `${API_BASE_URL}/communities/${communityId}/join`,
    LEAVE_COMMUNITY: (communityId: string) => `${API_BASE_URL}/communities/${communityId}/leave`,
    COMMUNITY_JOIN_REQUESTS: (communityId: string) => `${API_BASE_URL}/communities/${communityId}/join-requests`,
    
    // Groups
    GROUPS: `${API_BASE_URL}/groups`,
    GROUP_DETAIL: (groupId: string) => `${API_BASE_URL}/groups/${groupId}`,
    GROUP_MESSAGES: (groupId: string) => `${API_BASE_URL}/groups/${groupId}/messages`,
    JOIN_GROUP_LINK: `${API_BASE_URL}/groups/join-via-link`,
    GENERATE_INVITE: (groupId: string) => `${API_BASE_URL}/groups/${groupId}/invite-link`,
    
    // Notifications
    NOTIFICATIONS: `${API_BASE_URL}/notifications`,
};
