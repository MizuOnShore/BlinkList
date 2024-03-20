var songList = [
    { name: `Adam's Song`, album: 'Enema of the State', albumCover: 'EnemaoftheState.jpg', url: 'songs/adamsong.mp3' },
    { name: 'All the Small things', album: 'Enema of the State', albumCover: 'EnemaoftheState.jpg', url: 'songs/allthesmallthings.mp3' },
    { name: 'First Date', album: 'take off your pants', albumCover: 'takeoffyourpants.jpg', url: 'songs/firstdate.mp3' },
    { name: 'Anthem Part Two', album: 'take off your pants', albumCover: 'takeoffyourpants.jpg', url: 'songs/AnthemPartTwo.mp3' },
    { name: 'The Rock Show', album: 'take off your pants', albumCover: 'takeoffyourpants.jpg', url: 'songs/TheRockShow.mp3' },
    { name: 'Dammit', album: 'dude ranch', albumCover: 'duderanch.jpg', url: 'songs/dammit.mp3' },
    { name: 'Josie', album: 'dude ranch', albumCover: 'duderanch.jpg', url: 'songs/josie.mp3' },
    { name: 'Dumpweed', album: 'Enema of the State', albumCover: 'EnemaoftheState.jpg', url: 'songs/dumpweed.mp3' },
    { name: 'Aliens Exist', album: 'Enema of the State', albumCover: 'EnemaoftheState.jpg', url: 'songs/Aliens Exist.mp3' },
    { name: 'Going Away to College', album: 'Enema of the State', albumCover: 'EnemaoftheState.jpg', url: 'songs/Going Away To College.mp3' },
    { name: 'Whats My Age Again', album: 'Enema of the State', albumCover: 'EnemaoftheState.jpg', url: 'songs/Whats My Age Again.mp3' },
    { name: 'Dysentery Gary', album: 'Enema of the State', albumCover: 'EnemaoftheState.jpg', url: 'songs/Dysentery Gary.mp3' },
    { name: 'Mutt', album: 'Enema of the State', albumCover: 'EnemaoftheState.jpg', url: 'songs/Mutt.mp3' },
    { name: 'Dont Leave Me', album: 'Enema of the State', albumCover: 'EnemaoftheState.jpg', url: 'songs/Dont Leave Me.mp3' },
    { name: 'The Party Song', album: 'Enema of the State', albumCover: 'EnemaoftheState.jpg', url: 'songs/The Party Song.mp3' },
    { name: 'Wendy Clear', album: 'Enema of the State', albumCover: 'EnemaoftheState.jpg', url: 'songs/Wendy Clear.mp3' },
    { name: 'Anthem', album: 'Enema of the State', albumCover: 'EnemaoftheState.jpg', url: 'songs/Anthem.mp3' },
    { name: 'Story Of A Lonely Guy', album: 'take off your pants', albumCover: 'takeoffyourpants.jpg', url: 'songs/StoryLonely.mp3' },
    { name: 'Online Songs', album: 'take off your pants', albumCover: 'takeoffyourpants.jpg', url: 'songs/Online Songs.mp3' },
    { name: 'Happy Holidays', album: 'take off your pants', albumCover: 'takeoffyourpants.jpg', url: 'songs/Happy Holidays.mp3' },
    { name: 'Roller Coaster', album: 'take off your pants', albumCover: 'takeoffyourpants.jpg', url: 'songs/Roller Coaster.mp3' },
    { name: 'Reckless Abandon', album: 'take off your pants', albumCover: 'takeoffyourpants.jpg', url: 'songs/Reckless Abandon.mp3' },
    { name: 'Stay Together For The Kids', album: 'take off your pants', albumCover: 'takeoffyourpants.jpg', url: 'songs/Stay Together For The Kids.mp3' },
    { name: 'Every Time I Look For You', album: 'take off your pants', albumCover: 'takeoffyourpants.jpg', url: 'songs/Every Time I Look For You.mp3' },
    { name: 'Give Me One Good Reason', album: 'take off your pants', albumCover: 'takeoffyourpants.jpg', url: 'songs/Give Me One Good Reason.mp3' },
    { name: 'Please Take Me Home', album: 'take off your pants', albumCover: 'takeoffyourpants.jpg', url: 'songs/Please Take Me Home.mp3' },
    { name: 'Shut Up', album: 'take off your pants', albumCover: 'takeoffyourpants.jpg', url: 'songs/Shut Up.mp3' },
    { name: 'Feeling This', album: 'blink182', albumCover: 'blink182.jpg', url: 'songs/Feeling This.mp3' },
    { name: 'I Miss You', album: 'blink182', albumCover: 'blink182.jpg', url: 'songs/I Miss You.mp3' },
    { name: 'Pathetic', album: 'dude ranch', albumCover: 'duderanch.jpg', url: 'songs/Pathetic.mp3' },
    { name: `Adam's Song - The Mark, Tom and Travis Show`, album: 'marktom', albumCover: 'marktom.jpg', url: 'songs/marktom.mp3' },
    { name: 'Blowjob - The Mark, Tom and Travis Show', album: 'marktom', albumCover: 'marktom.jpg', url: 'songs/Blowjobsong.mp3' },
    { name: 'Family Reunion - The Mark, Tom and Travis Show', album: 'marktom', albumCover: 'marktom.jpg', url: 'songs/Family Reunion.mp3' },
    { name: 'Dont Leave Me - The Mark, Tom and Travis Show', album: 'marktom', albumCover: 'marktom.jpg', url: 'songs/Dont Leave Me - The Mark, Tom and Travis Show.mp3' },
    { name: 'Dumpweed - The Mark, Tom and Travis Show', album: 'marktom', albumCover: 'marktom.jpg', url: 'songs/Dumpweed - The Mark, Tom and Travis Show.mp3' },
    { name: 'Aliens Exist - The Mark, Tom and Travis Show', album: 'marktom', albumCover: 'marktom.jpg', url: 'songs/Aliens Exist - The Mark, Tom and Travis Show.mp3' },
    { name: 'Going Away To College - The Mark, Tom and Travis Show', album: 'marktom', albumCover: 'marktom.jpg', url: 'songs/Going Away To College - The Mark, Tom and Travis Show.mp3' },
    { name: 'Whats My Age Again - The Mark, Tom and Travis Show', album: 'marktom', albumCover: 'marktom.jpg', url: 'songs/Whats My Age Again - The Mark, Tom and Travis Show.mp3' },
    { name: 'Rich Lips - The Mark, Tom and Travis Show', album: 'marktom', albumCover: 'marktom.jpg', url: 'songs/Rich Lips - The Mark, Tom and Travis Show.mp3' },
    { name: 'Untitled - The Mark, Tom and Travis Show', album: 'marktom', albumCover: 'marktom.jpg', url: 'songs/Untitled - The Mark, Tom and Travis Show.mp3' },
    { name: 'Vouyeur - The Mark, Tom and Travis Show', album: 'marktom', albumCover: 'marktom.jpg', url: 'songs/Voyeur - The Mark, Tom and Travis Show.mp3' },
    { name: 'Dammit - The Mark, Tom and Travis Show', album: 'marktom', albumCover: 'marktom.jpg', url: 'songs/Dammit - The Mark, Tom and Travis Show.mp3' },
    { name: 'The Country Song - The Mark, Tom and Travis Show', album: 'marktom', albumCover: 'marktom.jpg', url: 'songs/The Country Song - The Mark, Tom and Travis Show.mp3' },
    { name: 'All The Small Things - The Mark, Tom and Travis Show', album: 'marktom', albumCover: 'marktom.jpg', url: 'songs/All The Amall Things - The Mark, Tom and Travis Show.mp3' },
    { name: 'Wendy Clear - The Mark, Tom and Travis Show', album: 'marktom', albumCover: 'marktom.jpg', url: 'songs/Wendy Clear - The Mark, Tom and Travis Show.mp3' },
    { name: 'Peggy Sue - The Mark, Tom and Travis Show', album: 'marktom', albumCover: 'marktom.jpg', url: 'songs/Peggy Sue- The Mark, Tom and Travis Show.mp3' },
    { name: 'Mutt - The Mark, Tom and Travis Show', album: 'marktom', albumCover: 'marktom.jpg', url: 'songs/Mutt - The Mark, Tom and Travis Show.mp3' },

    ];
    var audio = document.getElementById('audio');

document.addEventListener('DOMContentLoaded', function () {
    var songListContainer = document.getElementById('songList');
    var songSearchInput = document.getElementById('songSearch');
    var songsPerPage = 10;
    var currentPage = 0;
    var filteredSongs = [];
    var queue = [];
    var currentIndex = -1;
    var history = [];
    var MAX_HISTORY_SIZE = 10;
    
    audio.addEventListener('ended', function () {
        if (queue.length > 0) {
            queue.shift();
            if (queue.length > 0) {
                playSong(queue[0]);
                renderQueueList(queue);
            } else {
                playNextIfQueueEmpty();
                clearQueueList();
            }
        } else {
            playNextIfQueueEmpty();
            clearQueueList();
        }
    });
    
    function clearQueueList() {
        var queueItemsContainer = document.getElementById('queueItems');
        queueItemsContainer.innerHTML = '';
    }
    
    function playNextIfQueueEmpty() {
        var unplayedSongs = songList.filter(function (song) {
            return !history.includes(song) && !queue.includes(song);
        });
    
        if (unplayedSongs.length > 0) {
            var randomIndex = Math.floor(Math.random() * unplayedSongs.length);
            var nextSong = unplayedSongs[randomIndex];
            playSong(nextSong);
            updateHistory(nextSong); // Add the played song to history
        } else {
            // If there are no more unplayed songs, loop back to the beginning of the song list
            var firstSong = songList[0];
            playSong(firstSong);
            updateHistory(firstSong); // Add the played song to history
        }
    }
    
    function renderSongList(songs) {
        // Sort the songs alphabetically by their titles
        songs.sort((a, b) => a.name.localeCompare(b.name));
    
        songListContainer.innerHTML = '';
        var startIndex = currentPage * songsPerPage;
        var endIndex = startIndex + songsPerPage;
        var currentSongs = songs.slice(startIndex, endIndex);
        currentSongs.forEach(function (song) {
            var songContainer = document.createElement('div');
            songContainer.classList.add('song-container');
    
            var albumCover = document.createElement('div');
            albumCover.classList.add('album-cover');
            albumCover.setAttribute('data-src', song.albumCover);
    
            var songTitle = document.createElement('div');
            songTitle.classList.add('song-title');
            songTitle.textContent = truncateSongTitle(song.name, 25);
    
            songContainer.appendChild(albumCover);
            songContainer.appendChild(songTitle);
            songListContainer.appendChild(songContainer);
    
            songContainer.onclick = function () {
                playSong(song);
            };
    
            songContainer.addEventListener('contextmenu', function (event) {
                event.preventDefault();
                showContextMenu(event.pageX, event.pageY, song);
            });
        });
    
        lazyLoadImages();
    }
    
    function truncateSongTitle(title, maxLength) {
        if (title.length > maxLength) {
            return title.substring(0, maxLength) + '...';
        } else {
            return title;
        }
    }

    
        // Function to debounce input
        function debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    timeout = null;
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        }
    // Attach event listener for the input event of the search input field
songSearchInput.addEventListener('input', function () {
    // Call the debounced search function when the input changes
    debouncedSearch();
});

function searchSongsByName(searchTerm) {
    if (searchTerm) {
        filteredSongs = songList.filter(function (song) {
            return song.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
    } else {
        filteredSongs = songList.slice();
    }
}

        // Debounced search function
const debouncedSearch = debounce(function () {
    searchSongsByName(songSearchInput.value.trim());
    currentPage = 0; // Reset currentPage when filter changes
    // Update to render the filtered song list
    renderSongList(filteredSongs);
}, 200);

        // Function to shuffle an array
        function shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    
        // Event listener for scrolling to trigger lazy loading of images
        window.addEventListener('scroll', function () {
            lazyLoadImages();
        });
    
        // Event listener for album filter buttons
        var albumButtons = document.querySelectorAll('.album-button');
        albumButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                var selectedAlbum = button.dataset.album;
                albumButtons.forEach(function (btn) {
                    btn.classList.remove('active');
                });
                button.classList.add('active');
                if (selectedAlbum) {
                    filteredSongs = songList.filter(function (song) {
                        return song.album === selectedAlbum;
                    });
                    currentPage = 0; // Reset currentPage when filter changes
                    renderSongList(filteredSongs);
                } else {
                    filteredSongs = []; // Clear filteredSongs array
                    currentPage = 0; // Reset currentPage when filter is cleared
                    renderSongList(songList);
                }
            });
        });
    
        // Initial rendering of song list
        shuffleArray(songList);
        renderSongList(songList);
    
        // Function to lazy load images
        function lazyLoadImages() {
            var images = document.querySelectorAll('div.album-cover[data-src]');
            images.forEach(function (img) {
                if (img.getBoundingClientRect().top < window.innerHeight) {
                    img.style.backgroundImage = "url('" + img.getAttribute('data-src') + "')";
                    img.removeAttribute('data-src');
                }
            });
        }
    


        // Next button functionality
        var nextButton = document.getElementById('nextButton');
        nextButton.addEventListener('click', function () {
            var totalSongs = filteredSongs.length > 0 ? filteredSongs.length : songList.length;
            var totalPages = Math.ceil(totalSongs / songsPerPage);
            if (currentPage < totalPages - 1) {
                currentPage++;
                renderSongList(filteredSongs.length > 0 ? filteredSongs : songList);
            }
        });
    
        // Previous button functionality
        var prevButton = document.getElementById('prevButton');
        prevButton.addEventListener('click', function () {
            if (currentPage > 0) {
                currentPage--;
                renderSongList(filteredSongs.length > 0 ? filteredSongs : songList);
            }
        });
    
    

    var playPauseButton = document.getElementById('playPauseButton');
    var progressBar = document.getElementById('progressBar');
    var currentTime = document.getElementById('currentTime');
    var duration = document.getElementById('duration');
    var currentSong = document.getElementById('currentSong');
    var volumeBar = document.getElementById('volumeBar');

    function playSong(song) {
        if (audio.src !== song.url) {
            audio.src = song.url;
            audio.play();
            playPauseButton.innerHTML = '&#10074;&#10074;'; // Change button to pause
            updatePlayerUI(song);
            var indexInHistory = history.findIndex(function (playedSong) {
                return playedSong.url === song.url;
            });
            if (indexInHistory === -1) {
                // Add the song to history if it's not already present
                if (history.length >= MAX_HISTORY_SIZE) {
                    // Remove the oldest entry if history exceeds the maximum size
                    history.shift();
                }
                history.push(song);
                currentIndex = history.length - 1; // Update currentIndex
            } else {
                currentIndex = indexInHistory; // Update currentIndex to match the index in history
            }
        } else {
            if (audio.paused) {
                audio.play();
                playPauseButton.innerHTML = '&#10074;&#10074;'; // Change button to pause
            } else {
                audio.pause();
                playPauseButton.innerHTML = '&#9658;'; // Change button to play
            }
        }
    }


function playNext() {
    if (queue.length > 0) {
        var nextSong = queue.shift();
        updateHistory(nextSong); // Add the played song to history
        renderQueueList(queue); // Render the updated queue list
        playSong(nextSong);
    } else {
        var unplayedSongs = songList.filter(function (song) {
            return !history.includes(song) && !queue.includes(song);
        });

        if (unplayedSongs.length > 0) {
            var randomIndex = Math.floor(Math.random() * unplayedSongs.length);
            var nextSong = unplayedSongs[randomIndex];
            playSong(nextSong);
            updateHistory(nextSong); // Add the played song to history
        } else {
            // If there are no more unplayed songs, loop back to the beginning of the song list
            var firstSong = songList[0];
            playSong(firstSong);
            updateHistory(firstSong); // Add the played song to history
        }
    }
}


     // Function to play the previous song
     function playPrevious() {
        if (history.length > 0) {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = history.length - 1;
            }
            var previousSong = history[currentIndex];
            playSong(previousSong);
        } else if (queue.length > 0 && currentIndex !== -1) {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = queue.length - 1;
            }
            var previousSong = queue[currentIndex];
            playSong(previousSong);
        } else {
            var lastIndex = songList.length - 1;
            var lastSong = songList[lastIndex];
            playSong(lastSong);
            currentIndex = lastIndex; // Update currentIndex
        }
    }

    // Previous song button functionality
    var previousSongButton = document.getElementById('previoussongButton');
    previousSongButton.addEventListener('click', function () {
        playPrevious();
    });

    // Next song button functionality
    var nextSongButton = document.getElementById('nextsongButton');
    nextSongButton.addEventListener('click', function () {
        playNext();
    });
    // Function to fetch lyrics for the current song
    function getLyrics(song) {
        console.log('Fetching lyrics for:', song);
        var artist = "blink182";
        var getLyricsElement = document.getElementById('Lyrics');

        fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
            .then(response => response.json())
            .then(data => {
                if (data.lyrics) {
                    getLyricsElement.innerText = data.lyrics;
                } else {
                    getLyricsElement.innerText = "Lyrics not found for this song.";
                }
            })
            .catch(error => {
                console.error('Error fetching lyrics:', error);
                getLyricsElement.innerText = "Error fetching lyrics. Please try again later.";
            });
    }

    // Function to update the player UI with song information, including the album cover
    function updatePlayerUI(song) {
        currentSong.textContent = song.name;
        albumCover.src = song.albumCover; // Set the src attribute to the album cover image URL
    
        // Fetch lyrics for the current song
        getLyrics(song.name);
    
        audio.addEventListener('timeupdate', function () {
            var currentTimeValue = Math.floor(audio.currentTime);
            var durationValue = Math.floor(audio.duration);
    
            if (!isNaN(durationValue) && durationValue !== 0) {
                progressBar.value = (currentTimeValue / durationValue) * 100;
    
                var currentMinutes = Math.floor(currentTimeValue / 60);
                var currentSeconds = Math.floor(currentTimeValue - currentMinutes * 60);
                var durationMinutes = Math.floor(durationValue / 60);
                var durationSeconds = Math.floor(durationValue - durationMinutes * 60);
    
                currentTime.textContent = currentMinutes + ':' + (currentSeconds < 10 ? '0' + currentSeconds : currentSeconds);
                duration.textContent = durationMinutes + ':' + (durationSeconds < 10 ? '0' + durationSeconds : durationSeconds);
            }
        });
    
       
    }
    // Play/pause button functionality
    playPauseButton.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            playPauseButton.innerHTML = '&#10074;&#10074;'; // Pause icon
        } else {
            audio.pause();
            playPauseButton.innerHTML = '&#9658;'; // Play icon
        }
    });

    // Progress bar functionality
    progressBar.addEventListener('input', function () {
        var progress = progressBar.value;
        var durationValue = audio.duration;
        audio.currentTime = (progress * durationValue) / 100;
    });

   // Volume bar functionality
volumeBar.addEventListener('input', function () {
audio.volume = volumeBar.value;
updateVolumeIcon(volumeBar.value); // Update volume icon based on the new volume level
});

// Function to update the volume icon based on the volume level
function updateVolumeIcon(volumeLevel) {
var volumeIcon = document.getElementById('volumeIcon');
if (volumeLevel === 0) {
    volumeIcon.classList.remove('fa-volume-up', 'fa-volume-down');
    volumeIcon.classList.add('fa-volume-off');
} else if (volumeLevel < 0.5) {
    volumeIcon.classList.remove('fa-volume-up', 'fa-volume-off');
    volumeIcon.classList.add('fa-volume-down');
} else {
    volumeIcon.classList.remove('fa-volume-down', 'fa-volume-off');
    volumeIcon.classList.add('fa-volume-up');
}
}

// Initial update of volume icon based on the initial volume level
updateVolumeIcon(volumeBar.value);

    function showContextMenu(x, y, song) {
        var contextMenu = document.getElementById('contextMenu');
        contextMenu.style.top = y + 'px';
        contextMenu.style.left = x + 'px';
        contextMenu.style.display = 'block';

        // Event listener to add the song to the queue
        var addToQueueOption = document.getElementById('addToQueue');
        addToQueueOption.onclick = function () {
            queue.push(song);
            renderQueueList(queue);
            contextMenu.style.display = 'none';
        };

        // Hide the context menu when clicking outside of it
        window.addEventListener('click', function (event) {
            if (!contextMenu.contains(event.target)) {
                contextMenu.style.display = 'none';
            }
        });
    }
    // Function to add a song to the queue
    function addToQueue(song) {
        queue.push(song);
        renderQueueList(queue);
    }
    function renderQueueList(queue) {
        var queueItemsContainer = document.getElementById('queueItems');
        queueItemsContainer.innerHTML = '';
    
        if (queue.length === 0) {
            // Display a message when the queue is empty
            queueItemsContainer.innerHTML = '';
        } else {
            // Render each song in the queue
            queue.forEach(function (song, index) {
                var queueItem = document.createElement('li');
                queueItem.classList.add('queue-item', 'd-flex', 'justify-content-between', 'align-items-center');
    
                var songInfo = document.createElement('span');
                songInfo.classList.add('song-info');
                songInfo.textContent = song.name;
    
                var removeButton = document.createElement('button');
                removeButton.classList.add('btn', 'btn-outline-light', 'remove-btn');
                removeButton.innerHTML = '&times;'; // X symbol
                removeButton.setAttribute('type', 'button');
                removeButton.onclick = function (event) {
                    event.stopPropagation(); // Prevent the click from propagating to the parent element
                    removeFromQueue(index);
                };
    
                queueItem.appendChild(songInfo);
                queueItem.appendChild(removeButton);
                queueItemsContainer.appendChild(queueItem);
    
                queueItem.onclick = function () {
                    playSongFromQueue(index);
                };
            });
        }
    }
    
    // Function to remove a song from the queue
    function removeFromQueue(index) {
        queue.splice(index, 1);
        renderQueueList(queue);
    }

    // Function to play a song from the queue by its index
    function playSongFromQueue(index) {
        if (currentIndex === index) {
            // If the clicked song is the currently playing song, toggle play/pause
            if (audio.paused) {
                audio.play();
                playPauseButton.innerHTML = '&#10074;&#10074;'; // Pause icon
            } else {
                audio.pause();
                playPauseButton.innerHTML = '&#9658;'; // Play icon
            }
        } else {
            // If the clicked song is not the currently playing song, play it
            currentIndex = index;
            playSong(queue[currentIndex]);
        }
    }



    // Initial rendering of the queue list
    renderQueueList(queue);

    function updateHistory(song) {
if (queue.includes(song)) {
    // If the song is from the queue, update the currentIndex accordingly
    currentIndex = queue.indexOf(song);
} else {
    // If the song is not from the queue, proceed as before
    var indexInHistory = history.findIndex(function (playedSong) {
        return playedSong.url === song.url;
    });
    if (indexInHistory === -1) {
        // Add the song to history if it's not already present
        if (history.length >= MAX_HISTORY_SIZE) {
            // Remove the oldest entry if history exceeds the maximum size
            history.shift();
        }
        history.push(song);
        currentIndex = history.length - 1; // Update currentIndex
    } else {
        currentIndex = indexInHistory; // Update currentIndex to match the index in history
    }
}
}
});
function toggleSidebar() {
var sidebar = document.getElementById('sidebarRight');
var sidebarToggleIcon = document.getElementById('sidebarToggleIcon');

if (sidebar.style.right === '0px') {
    sidebar.style.right = '-600px';
    sidebarToggleIcon.classList.remove('fa-chevron-left');
    sidebarToggleIcon.classList.add('fa-chevron-right');
} else {
    sidebar.style.right = '0px';
    sidebarToggleIcon.classList.remove('fa-chevron-right');
    sidebarToggleIcon.classList.add('fa-chevron-left');
}
}

// Update the function to toggle sidebar when audio control button is clicked
var audioControlButton = document.getElementById('audioControlButton');
audioControlButton.addEventListener('click', function () {
toggleSidebar();
});

// Toggle volume bar visibility when volume icon is clicked
document.getElementById('volumeIcon').addEventListener('click', function(event) {
event.stopPropagation(); // Prevent the click event from bubbling up
var volumeBarContainer = document.getElementById('volumeBarContainer');
volumeBarContainer.classList.toggle('active');
});

// Close volume bar when clicking anywhere outside the volume control area
document.body.addEventListener('click', function(event) {
var volumeBarContainer = document.getElementById('volumeBarContainer');
if (!event.target.closest('.volume-control')) {
    volumeBarContainer.classList.remove('active');
}
});
document.addEventListener('keydown', function(event) {
if (event.key === 'ArrowLeft') {
    // Trigger the click event on the previous button
    document.getElementById('prevButton').click();
} else if (event.key === 'ArrowRight') {
    // Trigger the click event on the next button
    document.getElementById('nextButton').click();
}
});


// Function to load more songs asynchronously
function loadMoreSongs() {
    // Simulated asynchronous loading (replace with your actual implementation)
    setTimeout(function() {
        var moreSongs = songList.slice(10, 20); // Assuming loading next batch of 10 songs
        moreSongs.forEach(function(song) {
            // Render each song item
        });
    }, 1000); // Simulated delay of 1 second
}

// Function to lazy load images using Intersection Observer
function lazyLoadImages() {
    var images = document.querySelectorAll('img[data-src]');
    var options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    var imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var image = entry.target;
                image.src = image.dataset.src;
                image.removeAttribute('data-src');
                observer.unobserve(image);
            }
        });
    }, options);

    images.forEach(function(image) {
        imageObserver.observe(image);
    });
}

// Event listener for scrolling to trigger lazy loading
window.addEventListener('scroll', function() {
    lazyLoadImages();
});

// Initial load of the first batch of songs
window.addEventListener('DOMContentLoaded', function() {
    // Load initial songs
    var initialSongs = songList.slice(0, 10); // Adjust the number as needed
    initialSongs.forEach(function(song) {
        // Render each song item
    });

    // Lazy load album covers
    lazyLoadImages();

    // Check if the user has scrolled to the bottom of the page to load more songs
    window.addEventListener('scroll', function() {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            loadMoreSongs();
        }
    });
});



document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' && document.activeElement !== songSearch) {
        // Prevent the default behavior of the spacebar key (e.g., scrolling)
        event.preventDefault();
        
        // Toggle between playing and pausing the song
        if (audio.paused) {
            audio.play();
            playPauseButton.innerHTML = '&#10074;&#10074;'; // Pause icon
        } else {
            audio.pause();
            playPauseButton.innerHTML = '&#9658;'; // Play icon
        }
    }
});
