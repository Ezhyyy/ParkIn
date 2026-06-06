document.addEventListener('DOMContentLoaded', function() {
    // Initial states (A4 is selected by default as per UI mockup)
    let selectedSlot = 'A4';
    let selectedZone = 'Zona A';
    let vehicleName = 'Motor';

    // DOM Elements
    const titleZonaA = document.getElementById('titleZonaA');
    const titleZonaB = document.getElementById('titleZonaB');
    const selectedSlotNameText = document.getElementById('selectedSlotNameText');
    const selectedVehicleBadge = document.getElementById('selectedVehicleBadge');
    const slotButtons = document.querySelectorAll('.slot-btn');
    const btnBack = document.getElementById('btnBack');
    const btnConfirm = document.getElementById('btnConfirm');

    // 1. Read Booking Data from local storage
    const storedData = localStorage.getItem('parkin_booking');
    if (storedData) {
        try {
            const bookingData = JSON.parse(storedData);
            if (bookingData && bookingData.vehicle && bookingData.vehicle.name) {
                vehicleName = bookingData.vehicle.name;
            }
        } catch (e) {
            console.error('Error parsing booking data from localStorage', e);
        }
    }

    // 2. Initialize View
    titleZonaA.textContent = `Zona A — ${vehicleName}`;
    titleZonaB.textContent = `Zona B — ${vehicleName}`;
    selectedVehicleBadge.textContent = vehicleName;
    updateBanner();

    // 3. Interactive Slot Click Listeners
    slotButtons.forEach(btn => {
        // We only care about interactive clicks on non-disabled buttons
        if (btn.disabled) return;

        btn.addEventListener('click', function() {
            // Find currently selected slot button and revert it back to available
            const currentSelected = document.querySelector('.slot-btn.selected');
            if (currentSelected) {
                currentSelected.classList.remove('selected');
                currentSelected.classList.add('available');
            }

            // Set clicked button to selected
            this.classList.remove('available');
            this.classList.add('selected');

            // Update state
            selectedSlot = this.getAttribute('data-slot');
            selectedZone = this.getAttribute('data-zone');

            // Update display banner
            updateBanner();
        });
    });

    function updateBanner() {
        selectedSlotNameText.textContent = `${selectedSlot} — ${selectedZone}`;
    }

    // 4. Back Button Navigation
    btnBack.addEventListener('click', function() {
        window.location.href = '../pilih-kendaraan/index.html';
    });

    // 5. Confirm Reservation Button Navigation
    btnConfirm.addEventListener('click', function() {
        // Read existing booking data, append slot choices, and save it back
        let bookingData = {};
        if (storedData) {
            try {
                bookingData = JSON.parse(storedData);
            } catch (e) {
                bookingData = {};
            }
        }

        bookingData.slotCode = selectedSlot;
        bookingData.slotZone = selectedZone;

        localStorage.setItem('parkin_booking', JSON.stringify(bookingData));

        // Redirect to step 3 (Konfirmasi)
        window.location.href = '../konfirmasi/index.html';
    });
});
