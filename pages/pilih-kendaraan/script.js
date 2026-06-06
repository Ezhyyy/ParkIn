document.addEventListener('DOMContentLoaded', function() {
    // State variables
    let selectedVehicle = {
        type: 'motor',
        rate: 2000,
        name: 'Motor'
    };
    let selectedDuration = 1;
    let isCustomDuration = false;
    let customDurationValue = 1;

    // DOM Elements
    const cardMotor = document.getElementById('cardMotor');
    const cardMobil = document.getElementById('cardMobil');
    const durationButtons = document.querySelectorAll('.duration-btn');
    const btnCustom = document.getElementById('btnCustom');
    const customInputWrapper = document.getElementById('customInputWrapper');
    const inputCustomHours = document.getElementById('inputCustomHours');
    const startTimeText = document.getElementById('startTimeText');
    const costValueText = document.getElementById('costValueText');
    const summaryMetaText = document.getElementById('summaryMetaText');
    const btnBack = document.getElementById('btnBack');
    const btnNext = document.getElementById('btnNext');

    // Initialize Page
    updateTimeDisplay();
    updateSummary();

    // 1. Vehicle Selection Event Listeners
    cardMotor.addEventListener('click', function() {
        selectVehicle('motor', 2000, 'Motor', cardMotor, cardMobil);
    });

    cardMobil.addEventListener('click', function() {
        selectVehicle('mobil', 5000, 'Mobil', cardMobil, cardMotor);
    });

    function selectVehicle(type, rate, name, activeCard, inactiveCard) {
        selectedVehicle.type = type;
        selectedVehicle.rate = rate;
        selectedVehicle.name = name;

        activeCard.classList.add('active');
        inactiveCard.classList.remove('active');
        
        updateSummary();
    }

    // 2. Duration Selection Event Listeners
    durationButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all duration buttons
            durationButtons.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const hoursVal = this.getAttribute('data-hours');
            
            if (hoursVal === 'custom') {
                isCustomDuration = true;
                customInputWrapper.style.display = 'flex';
                inputCustomHours.focus();
                
                // Read value from input field or default to 1
                const inputVal = parseInt(inputCustomHours.value);
                selectedDuration = (inputVal > 0) ? inputVal : 1;
            } else {
                isCustomDuration = false;
                customInputWrapper.style.display = 'none';
                selectedDuration = parseInt(hoursVal);
            }
            
            updateSummary();
        });
    });

    // Handle Custom Duration Input
    inputCustomHours.addEventListener('input', function() {
        if (!isCustomDuration) return;
        
        let val = parseInt(this.value);
        if (isNaN(val) || val <= 0) {
            selectedDuration = 1;
        } else {
            // Limit to max 24 hours to prevent extreme inputs
            if (val > 24) {
                val = 24;
                this.value = 24;
            }
            selectedDuration = val;
        }
        updateSummary();
    });

    // 3. Dynamic Current Time in WIB (UTC + 7)
    function updateTimeDisplay() {
        const now = new Date();
        
        // Format options for WIB Time (Western Indonesian Time)
        // Indonesia/Jakarta is Asia/Jakarta (WIB is UTC+7)
        try {
            const timeOptions = {
                timeZone: 'Asia/Jakarta',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            };
            const wibTime = new Intl.DateTimeFormat('id-ID', timeOptions).format(now);
            startTimeText.textContent = `Sekarang · ${wibTime.replace(':', '.')} WIB`;
        } catch (e) {
            // Fallback if system doesn't support the timezone database
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            startTimeText.textContent = `Sekarang · ${hours}.${minutes} WIB`;
        }
    }

    // Update time display every minute
    setInterval(updateTimeDisplay, 60000);

    // 4. Update Price and Metadata Summary
    function updateSummary() {
        const totalCost = selectedDuration * selectedVehicle.rate;
        
        // Format cost value
        const formattedCost = 'Rp ' + totalCost.toLocaleString('id-ID');
        costValueText.textContent = formattedCost;
        
        // Update metadata text
        summaryMetaText.textContent = `${selectedDuration} jam · ${selectedVehicle.name}`;
    }

    // 5. Back Button Navigation
    btnBack.addEventListener('click', function() {
        window.location.href = '../detail-lokasi/index.html';
    });

    // 6. Next Button Navigation (Pilih Slot Parkir)
    btnNext.addEventListener('click', function() {
        // Save current selections to localStorage for the next page to use
        const bookingData = {
            vehicle: selectedVehicle,
            duration: selectedDuration,
            totalCost: selectedDuration * selectedVehicle.rate,
            startTimeText: startTimeText.textContent
        };
        localStorage.setItem('parkin_booking', JSON.stringify(bookingData));
        
        // Redirect to step 2 (Pilih Slot)
        window.location.href = '../pilih-slot/index.html';
    });
});
