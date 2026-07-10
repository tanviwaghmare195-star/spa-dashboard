function settingsPage() {
    return `
    <section class="hero">

        <h1>Settings</h1>
        <p>Customize your application preferences.</p>

        <div class="cards">

            <div class="card" onclick="showSetting('theme')">
                <h2>🌙 Theme</h2>
                <p>Switch between Light and Dark mode.</p>
            </div>

            <div class="card" onclick="showSetting('notifications')">
                <h2>🔔 Notifications</h2>
                <p>Manage notification preferences.</p>
            </div>

            <div class="card" onclick="showSetting('profile')">
                <h2>👤 Profile</h2>
                <p>Update your personal information.</p>
            </div>

            <div class="card" onclick="showSetting('language')">
                <h2>🌐 Language</h2>
                <p>Select your preferred language.</p>
            </div>

            <div class="card" onclick="showSetting('privacy')">
                <h2>🔒 Privacy</h2>
                <p>Control your privacy settings.</p>
            </div>

            <div class="card" onclick="showSetting('backup')">
                <h2>💾 Backup</h2>
                <p>Backup and restore your data.</p>
            </div>

        </div>

        <div id="settingContent" style="margin-top:40px;"></div>

    </section>
    `;
}

function showSetting(type){

    const box=document.getElementById("settingContent");

    if(type==="profile"){
        box.innerHTML=`
            <div class="card">
                <h2>Edit Profile</h2>

                <input type="text" placeholder="Full Name"><br><br>

                <input type="email" placeholder="Email"><br><br>

                <input type="text" placeholder="Phone Number"><br><br>

                <button class="btn">Save Changes</button>
            </div>
        `;
    }

    else if(type==="language"){
        box.innerHTML=`
            <div class="card">
                <h2>Language</h2>

                <select>
                    <option>English</option>
                    <option>Hindi</option>
                    <option>Marathi</option>
                </select>

                <br><br>

                <button class="btn">Save</button>
            </div>
        `;
    }

    else if(type==="notifications"){
        box.innerHTML=`
            <div class="card">
                <h2>Notifications</h2>

                <label><input type="checkbox"> Email Notifications</label><br><br>

                <label><input type="checkbox"> SMS Notifications</label><br><br>

                <button class="btn">Save</button>
            </div>
        `;
    }

    else if(type==="privacy"){
        box.innerHTML=`
            <div class="card">
                <h2>Privacy</h2>

                <label><input type="checkbox"> Public Profile</label><br><br>

                <label><input type="checkbox"> Show Email</label><br><br>

                <button class="btn">Save</button>
            </div>
        `;
    }

    else if(type==="backup"){
        box.innerHTML=`
            <div class="card">
                <h2>Backup</h2>

                <button class="btn">Create Backup</button>

                <br><br>

                <button class="btn">Restore Backup</button>
            </div>
        `;
    }

    else if(type==="theme"){
        box.innerHTML=`
            <div class="card">
                <h2>Theme</h2>

                <button class="btn" onclick="document.getElementById('themeToggle').click()">
                    Toggle Dark Mode
                </button>
            </div>
        `;
    }

}