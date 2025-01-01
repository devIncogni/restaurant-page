function generateMenu(container) {
  container.innerHTML = `<div class="menu-info">
                <div>
                    <h1>Menu</h1>
                </div>
                <div>
                    <table class="menu-table">
                        <!-- <caption>Schedule</caption> -->
                        <tbody>
                            <tr>
                                <th>Item</th>
                                <th>Description</th>
                                <th>Price</th>
                            </tr>
                            <tr>
                                <th>Debug Espresso</th>
                                <td>Strong shot for quick bug fixes.</td>
                                <td>₹120</td>
                            </tr>
                            <tr>
                                <th>Double Shot Espresso</th>
                                <td>Twice the caffeine, perfect for crunch time.</td>
                                <td>₹150</td>
                            </tr>
                            <tr>
                                <th>Mocha Stack</th>
                                <td>Espresso meets chocolate - sweet but powerful.</td>
                                <td>₹180</td>
                            </tr>
                            <tr>
                                <th>Cold Brew Commits</th>
                                <td>Smooth, cold, and refreshes your next push.</td>
                                <td>₹170</td>
                            </tr>
                            <tr>
                                <th>Iced Americano</th>
                                <td>Simple, strong, and perfect for long builds.</td>
                                <td>₹160</td>
                            </tr>
                            <tr>
                                <th>Matcha Refactor</th>
                                <td>Green tea that refreshes your logic and code.</td>
                                <td>₹140</td>
                            </tr>
                            <tr>
                                <th>Cookie Stack</th>
                                <td>Soft cookies to sweeten the coding journey.</td>
                                <td>₹100</td>
                            </tr>
                            <tr>
                                <th>Compiler Croissant</th>
                                <td>Buttery and flaky - pairs with any coffee. </td>
                                <td>₹130</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </div>`;
}

export default generateMenu;
