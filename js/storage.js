// Storage Module - LocalStorage wrapper with error handling
(function() {
  'use strict';

  const STORAGE_KEY = 'seo-workshop-progress';
  const STORAGE_KEY_CURRENT = 'seo-workshop-current';

  // Safe LocalStorage operations
  const Storage = {
    // Get all progress data
    getProgress: function() {
      try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : {};
      } catch (e) {
        console.error('Error reading progress:', e);
        return {};
      }
    },

    // Save progress data
    saveProgress: function(data) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        return true;
      } catch (e) {
        console.error('Error saving progress:', e);
        return false;
      }
    },

    // Mark item as mastered
    setMastered: function(id, mastered = true) {
      try {
        const progress = this.getProgress();
        progress[id] = { mastered: mastered, timestamp: Date.now() };
        return this.saveProgress(progress);
      } catch (e) {
        console.error('Error setting mastered:', e);
        return false;
      }
    },

    // Check if item is mastered
    isMastered: function(id) {
      try {
        const progress = this.getProgress();
        return progress[id] && progress[id].mastered;
      } catch (e) {
        console.error('Error checking mastered:', e);
        return false;
      }
    },

    // Get all mastered items
    getMastered: function() {
      try {
        const progress = this.getProgress();
        return Object.keys(progress).filter(id => progress[id].mastered);
      } catch (e) {
        console.error('Error getting mastered:', e);
        return [];
      }
    },

    // Get current item index
    getCurrentIndex: function() {
      try {
        const index = localStorage.getItem(STORAGE_KEY_CURRENT);
        return index ? parseInt(index, 10) : 0;
      } catch (e) {
        console.error('Error getting current index:', e);
        return 0;
      }
    },

    // Set current item index
    setCurrentIndex: function(index) {
      try {
        localStorage.setItem(STORAGE_KEY_CURRENT, index.toString());
        return true;
      } catch (e) {
        console.error('Error setting current index:', e);
        return false;
      }
    },

    // Clear all progress
    clearProgress: function() {
      try {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(STORAGE_KEY_CURRENT);
        return true;
      } catch (e) {
        console.error('Error clearing progress:', e);
        return false;
      }
    },

    // Get progress statistics
    getStats: function(totalItems) {
      try {
        const mastered = this.getMastered();
        const progress = this.getProgress();
        const currentIndex = this.getCurrentIndex();

        return {
          total: totalItems,
          mastered: mastered.length,
          inProgress: Object.keys(progress).length - mastered.length,
          currentIndex: currentIndex
        };
      } catch (e) {
        console.error('Error getting stats:', e);
        return { total: totalItems, mastered: 0, inProgress: 0, currentIndex: 0 };
      }
    }
  };

  // Export to global scope
  if (typeof window !== 'undefined') {
    window.Storage = Storage;
  }

  // Export for module systems
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Storage;
  }
})();
