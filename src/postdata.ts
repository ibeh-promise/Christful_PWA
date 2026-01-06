
const posts = [
    {
      postType: 'image' as const,
      authorName: 'Chukwuchebem David',
      authorAvatar: '/dextrus.png',
      date: 'January 2, 2026 at 6:47PM',
      textContent: 'Check out this beautiful sunset from my hike today!',
      mediaUrl: '/dextrus.png',
      mediaAlt: 'Sunset over mountains'
    },
    {
      postType: 'video' as const,
      authorName: 'Jane Smith',
      authorAvatar: '/jane.jpg',
      date: 'January 1, 2026 at 3:30PM',
      textContent: 'My new year vlog is up! Watch the highlights.',
      mediaUrl: '/newyear-vlog.mp4'
    },
    {
      postType: 'audio' as const,
      authorName: 'Music Lover',
      authorAvatar: '/music.jpg',
      date: 'December 31, 2025 at 11:59PM',
      textContent: 'My new podcast episode is out now!',
      mediaUrl: '/podcast.mp3'
    },
    {
      postType: 'text' as const,
      authorName: 'Thoughtful Writer',
      authorAvatar: '/writer.jpg',
      date: 'December 30, 2025 at 2:15PM',
      textContent: 'Reflecting on the past year and setting intentions for the new one. Sometimes the quiet moments teach us the most.'
    }
  ];

export { posts };