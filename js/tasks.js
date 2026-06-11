/* =========================================================
   tasks.js – Standalone Showcase Pages Script Engine
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  // ── 1. Mobile Top Navigation Menu Toggle ─────────────────
  const tasksMobileToggle = document.getElementById('tasksMobileToggle');
  const tasksNavMobile = document.getElementById('tasksNavMobile');

  if (tasksMobileToggle && tasksNavMobile) {
    tasksMobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      tasksNavMobile.classList.toggle('open');
    });

    // Close menu on click outside
    document.addEventListener('click', (e) => {
      if (!tasksNavMobile.contains(e.target) && e.target !== tasksMobileToggle) {
        tasksNavMobile.classList.remove('open');
      }
    });
  }


  // ── 2. Theme Synchronizer ──────────────────────────────
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;

  // Sync toggle icon on load
  const currentTheme = root.getAttribute('data-theme') || 'dark';
  updateToggleIcon(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateToggleIcon(next);
    });
  }

  function updateToggleIcon(theme) {
    if (!themeToggle) return;
    const icon = themeToggle.querySelector('.toggle-thumb i');
    if (theme === 'light') {
      icon.className = 'fas fa-moon';
    } else {
      icon.className = 'fas fa-sun';
    }
  }


  // ── 3. Blog Reader Modal (Task 2) ── Bootstrap Modal API ───
  const blogReaderModalEl = document.getElementById('blogReaderModal');
  let blogModalInstance = null;
  if (blogReaderModalEl) {
    blogModalInstance = new bootstrap.Modal(blogReaderModalEl);
  }
  const modalBadge = document.getElementById('modalBadge');
  const modalTitle = document.getElementById('modalTitle');
  const modalDate = document.getElementById('modalDate');
  const modalReadTime = document.getElementById('modalReadTime');
  const modalText = document.getElementById('modalText');

  const articles = {
    "1": {
      badge: "HTML & CSS",
      title: "Mastering CSS Grid: Layout Patterns for 2026",
      date: "June 10, 2026",
      readTime: "5 min read",
      content: `
        <p>CSS Grid Layout is one of the most powerful layout tools available in modern CSS. It allows developers to create complex, two-dimensional layouts with ease, offering structural flexibility that was previously impossible with older layout frameworks.</p>
        <p><strong>Why CSS Grid is a game changer:</strong></p>
        <ul>
          <li><strong>Two-Dimensional Grid Control:</strong> Grid controls both columns and rows simultaneously, allowing elements to span multiple rows and columns easily.</li>
          <li><strong>Grid Template Areas:</strong> You can define custom layouts named in plain text (like <code>"header header", "sidebar main"</code>) making your layout self-documenting.</li>
          <li><strong>Alignment Controls:</strong> CSS Grid inherits box alignment properties, meaning centering elements vertically and horizontally takes just two lines of CSS.</li>
        </ul>
        <p>In this training project, we explored building dashboard systems using Grid. By using grid templates and defining responsive column tracks using <code>repeat(auto-fit, minmax(280px, 1fr))</code>, we can build grids that dynamically adapt to any screen size without writing a single media query.</p>
        <p>Mastering Grid is essential for any modern frontend engineer. Start integrating it into your layouts today to simplify your markup and build robust layouts!</p>
      `
    },
    "2": {
      badge: "JavaScript",
      title: "Demystifying JS Closures & Scope Chains",
      date: "June 08, 2026",
      readTime: "7 min read",
      content: `
        <p>JavaScript closures are often regarded as an advanced topic, but they are a fundamental part of how the language works under the hood. A closure is created every time a function is defined, allowing that function to "remember" and access variables from its outer scope even after the outer function has finished executing.</p>
        <p><strong>A practical scope example:</strong></p>
        <pre style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 12px; border-radius: var(--radius); overflow-x: auto; color: var(--accent); font-family: var(--font-code); font-size: 0.85rem; line-height: 1.5;">function createCounter() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  };\n}\nconst counter = createCounter();\nconsole.log(counter()); // Output: 1\nconsole.log(counter()); // Output: 2</pre>
        <p>In the code snippet above, the inner function maintains access to the <code>count</code> variable declared in the outer scope of <code>createCounter</code>, even after <code>createCounter</code> has completed execution. The inner function retains a closure over its outer variables.</p>
        <p>Closures are incredibly useful for data encapsulation, creating private state variables, and setting up callbacks or handlers with persistent context. Understanding closures helps you write cleaner, modular JavaScript and prevents scope-related bugs in your web apps.</p>
      `
    },
    "3": {
      badge: "Web Design",
      title: "The Principles of Sleek Glassmorphic Design",
      date: "June 04, 2026",
      readTime: "4 min read",
      content: `
        <p>Glassmorphism has taken the digital design world by storm. Characterised by frosted-glass effects, floating panels, vibrant background orbs, and thin borders, this aesthetic adds a futuristic, premium feel to user interfaces.</p>
        <p><strong>Core rules of Glassmorphic UI:</strong></p>
        <ol>
          <li><strong>Backdrop Blur:</strong> The key styling property is <code>backdrop-filter: blur(12px)</code>. This diffuses the background details behind the glass card.</li>
          <li><strong>Translucent Backgrounds:</strong> Use color formulas with transparency, such as <code>rgba(25, 30, 50, 0.6)</code> for dark themes or <code>rgba(255, 255, 255, 0.75)</code> for light themes.</li>
          <li><strong>Thin Borders:</strong> A thin, translucent border (e.g. <code>border: 1px solid rgba(255, 255, 255, 0.08)</code>) defines the boundaries of the card, separating it from the background.</li>
          <li><strong>Layering:</strong> Position glowing orbs or gradients underneath the glass cards to give depth and emphasize the frosted texture.</li>
        </ol>
        <p>When applying glassmorphic design, always ensure your text contrast remains high. Never sacrifice user experience and accessibility for visual styling. Keep your fonts bold, text colors contrasting, and apply adequate shadows to maintain readability!</p>
      `
    },
    "4": {
      badge: "HTML & CSS",
      title: "Responsive Typography with CSS clamp() in 2026",
      date: "June 01, 2026",
      readTime: "4 min read",
      content: `
        <p>Creating layouts that look great on both mobile phones and giant monitors has traditionally meant writing tons of CSS media queries. While effective, this approach can quickly bloat your stylesheets and lead to disjointed text jumps between breakpoints.</p>
        <p>Enter the CSS <code>clamp()</code> function. This mathematical layout utility takes three parameters: a minimum value, a preferred value (often relative to the viewport size), and a maximum value.</p>
        <pre style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 12px; border-radius: var(--radius); overflow-x: auto; color: var(--accent-2); font-family: var(--font-code); font-size: 0.85rem; line-height: 1.5;">h1 {\n  font-size: clamp(2rem, 4vw + 1rem, 4.5rem);\n}</pre>
        <p><strong>How clamp works under the hood:</strong></p>
        <p>In the declaration above, the font-size will never fall below <code>2rem</code>, and will never grow larger than <code>4.5rem</code>. Between those bounds, it will scale fluidly at <code>4% of the viewport width + 1rem</code>. This provides a completely smooth sizing curve that responds instantly as you resize the browser window, without snapping or layout shifts.</p>
        <p>CSS clamp() is highly recommended for headers, body texts, and paddings. By combining absolute units (rem) with viewport units (vw), you maintain accessibility (so user zoom settings are respected) while crafting fluid layouts.</p>
      `
    },
    "5": {
      badge: "WordPress",
      title: "Optimizing Core Web Vitals for WordPress Websites",
      date: "May 28, 2026",
      readTime: "6 min read",
      content: `
        <p>Core Web Vitals are a set of specific metrics that Google uses to evaluate a website's speed, visual stability, and responsiveness. Since Google uses these metrics as a key search ranking factor, optimizing them is vital for any professional site owner.</p>
        <p><strong>The three pillars of Web Vitals:</strong></p>
        <ul>
          <li><strong>LCP (Largest Contentful Paint):</strong> Measures loading performance. For a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading.</li>
          <li><strong>FID (First Input Delay) / INP (Interaction to Next Paint):</strong> Measures interactivity. Sites should have a response delay of less than 100 milliseconds.</li>
          <li><strong>CLS (Cumulative Layout Shift):</strong> Measures visual stability. Pages should maintain a CLS score of less than 0.1 to avoid annoying page jumps as images load.</li>
        </ul>
        <p><strong>WordPress specific optimization strategies:</strong></p>
        <p>To optimize WordPress sites, start by choosing a lightweight theme and hosting on a fast database server. Implement aggressive caching, optimize images to modern WebP formats, and defer non-essential JavaScript. Ensure all images have explicit <code>width</code> and <code>height</code> attributes to reserve space on the page and completely eliminate CLS errors.</p>
        <p>By regularly monitoring your vital scores via Google Search Console and applying structured performance optimizations, you can significantly boost user retention and organic SEO ranking.</p>
      `
    }
  };

  const readMoreBtns = document.querySelectorAll('.read-more-btn');

  function openReaderModal(articleId) {
    const article = articles[articleId];
    if (!article) return;

    if (modalBadge) modalBadge.textContent = article.badge;
    if (modalTitle) modalTitle.textContent = article.title;
    if (modalDate) modalDate.textContent = article.date;
    if (modalReadTime) modalReadTime.textContent = article.readTime;
    if (modalText) modalText.innerHTML = article.content;

    if (blogModalInstance) {
      blogModalInstance.show();
    }
  }

  readMoreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const articleId = btn.getAttribute('data-article');
      openReaderModal(articleId);
    });
  });


  // ── 4. Product Gallery Store Logic (Task 3) ──────────────
  const filterPills = document.querySelectorAll('.filter-pill');
  const productCols = document.querySelectorAll('.product-item-col');
  const cartToggle = document.getElementById('cartToggle');
  const cartDropdown = document.getElementById('cartDropdown');
  const cartBadgeCount = document.getElementById('cartBadgeCount');
  const cartDropdownItems = document.getElementById('cartDropdownItems');
  const cartDropdownFooter = document.getElementById('cartDropdownFooter');
  const cartTotalSum = document.getElementById('cartTotalSum');
  const checkoutBtn = document.getElementById('checkoutBtn');

  let cart = [];

  // Filter products by category
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const filter = pill.getAttribute('data-filter');

      filterPills.forEach(btn => btn.classList.remove('active'));
      pill.classList.add('active');

      productCols.forEach(col => {
        const category = col.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          col.style.display = 'block';
        } else {
          col.style.display = 'none';
        }
      });
    });
  });

  // Cart dropdown is now handled by Bootstrap's dropdown plugin
  // via data-bs-toggle="dropdown" on the cart-toggle button.
  // No manual toggle needed — Bootstrap JS manages show/hide.

  // Add item listener hooks
  const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
  addToCartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const name = btn.getAttribute('data-name');
      const price = parseFloat(btn.getAttribute('data-price'));

      const existingProduct = cart.find(item => item.id === id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        cart.push({ id, name, price, quantity: 1 });
      }

      updateCartUI();
      animateCartBadge();

      // Dynamic feedback micro-interaction
      const originalHTML = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-check me-1"></i> Added!';
      btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
      btn.style.borderColor = 'transparent';
      btn.style.color = '#fff';
      btn.style.pointerEvents = 'none';

      setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.style.background = '';
        btn.style.borderColor = '';
        btn.style.color = '';
        btn.style.pointerEvents = '';
      }, 1200);
    });
  });

  function updateCartUI() {
    if (!cartBadgeCount || !cartDropdownItems) return;

    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartBadgeCount.textContent = totalCount;

    const totalSum = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    cartDropdownItems.innerHTML = '';

    if (cart.length === 0) {
      cartDropdownItems.innerHTML = `
        <div class="cart-empty-message py-3 text-center text-muted">
          Your cart is empty.
        </div>
      `;
      if (cartDropdownFooter) cartDropdownFooter.style.display = 'none';
    } else {
      cart.forEach(item => {
        const itemRow = document.createElement('div');
        itemRow.className = 'cart-item-row';
        itemRow.innerHTML = `
          <div class="d-flex flex-column">
            <span class="cart-item-name" title="${item.name}">${item.name}</span>
            <span class="text-muted" style="font-size:0.75rem;">Qty: ${item.quantity}</span>
          </div>
          <div class="d-flex align-items-center gap-2">
            <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
            <button class="cart-item-remove-btn" data-id="${item.id}" aria-label="Remove item">
              <i class="far fa-trash-alt"></i>
            </button>
          </div>
        `;

        itemRow.querySelector('.cart-item-remove-btn').addEventListener('click', (e) => {
          e.stopPropagation();
          removeFromCart(item.id);
        });

        cartDropdownItems.appendChild(itemRow);
      });

      if (cartTotalSum) cartTotalSum.textContent = `$${totalSum.toFixed(2)}`;
      if (cartDropdownFooter) cartDropdownFooter.style.display = 'block';
    }
  }

  function removeFromCart(id) {
    const productIdx = cart.findIndex(item => item.id === id);
    if (productIdx > -1) {
      if (cart[productIdx].quantity > 1) {
        cart[productIdx].quantity -= 1;
      } else {
        cart.splice(productIdx, 1);
      }
    }
    updateCartUI();
    animateCartBadge();
  }

  function animateCartBadge() {
    if (!cartBadgeCount) return;
    cartBadgeCount.classList.add('pop');
    setTimeout(() => {
      cartBadgeCount.classList.remove('pop');
    }, 300);
  }

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      alert(`Checkout processed for ${cart.length} item types. Thank you for testing!`);
      cart = [];
      updateCartUI();
      // Close Bootstrap dropdown
      if (cartToggle) {
        const dropdownInstance = bootstrap.Dropdown.getInstance(cartToggle);
        if (dropdownInstance) dropdownInstance.hide();
      }
    });
  }


  // ── 5. Interactive Calculator Logic (Task 4) ────────────
  const calcScreen = document.getElementById('calcScreen');
  const calcHistory = document.getElementById('calcHistory');
  const numButtons = document.querySelectorAll('.calc-btn.btn-num');
  const actionButtons = document.querySelectorAll('.calc-btn.btn-action');
  const calcEqual = document.getElementById('calcEqual');
  const calcLogList = document.getElementById('calcLogList');
  const clearCalcLog = document.getElementById('clearCalcLog');

  let currentInput = '0';
  let previousInput = '';
  let operator = '';
  let isNewCalculation = false;
  let calculationLog = [];

  function updateCalculatorDisplay() {
    if (calcScreen) calcScreen.textContent = currentInput;
    if (calcHistory) {
      if (operator) {
        calcHistory.textContent = `${previousInput} ${operator}`;
      } else {
        calcHistory.textContent = '\u00A0';
      }
    }
  }

  function renderCalculatorLog() {
    if (!calcLogList) return;
    calcLogList.innerHTML = '';
    if (calculationLog.length === 0) {
      calcLogList.innerHTML = '<div class="text-center text-muted py-4" style="font-size:0.8rem;">No calculations logged.</div>';
      return;
    }
    calculationLog.forEach(log => {
      const logItem = document.createElement('div');
      logItem.className = 'calc-log-item';
      logItem.innerHTML = `
        <div class="calc-log-eq">${log.eq} =</div>
        <div class="calc-log-res">${log.res}</div>
      `;
      calcLogList.appendChild(logItem);
    });
  }

  numButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.getAttribute('data-val');

      if (isNewCalculation) {
        currentInput = val === '.' ? '0.' : val;
        isNewCalculation = false;
      } else {
        if (currentInput === '0' && val !== '.') {
          currentInput = val;
        } else {
          if (val === '.' && currentInput.includes('.')) return;
          currentInput += val;
        }
      }
      updateCalculatorDisplay();
    });
  });

  actionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.getAttribute('data-type');
      const val = btn.getAttribute('data-val');

      if (type === 'clear') {
        currentInput = '0';
        previousInput = '';
        operator = '';
        isNewCalculation = false;
      } else if (type === 'delete') {
        if (isNewCalculation) {
          currentInput = '0';
        } else {
          currentInput = currentInput.slice(0, -1);
          if (currentInput === '' || currentInput === '-') {
            currentInput = '0';
          }
        }
      } else if (val) {
        if (operator && !isNewCalculation) {
          calculate();
        }
        operator = val;
        previousInput = currentInput;
        isNewCalculation = true;
      }
      updateCalculatorDisplay();
    });
  });

  if (calcEqual) {
    calcEqual.addEventListener('click', () => {
      if (!operator) return;
      
      const prevString = previousInput;
      const opString = operator === '*' ? '×' : operator === '/' ? '÷' : operator;
      const currString = currentInput;

      calculate();
      
      const resultString = currentInput;
      
      if (resultString !== 'Error') {
        // Log this calculation
        calculationLog.unshift({
          eq: `${prevString} ${opString} ${currString}`,
          res: resultString
        });
        if (calculationLog.length > 5) calculationLog.pop(); // keep last 5
        renderCalculatorLog();
      }

      operator = '';
      previousInput = '';
      isNewCalculation = true;
      updateCalculatorDisplay();
    });
  }

  function calculate() {
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    
    if (isNaN(prev) || isNaN(curr)) return;

    let result = 0;
    switch (operator) {
      case '+': result = prev + curr; break;
      case '-': result = prev - curr; break;
      case '*': result = prev * curr; break;
      case '/':
        if (curr === 0) {
          currentInput = 'Error';
          return;
        }
        result = prev / curr;
        break;
      default: return;
    }
    currentInput = String(Number(result.toFixed(8)));
  }

  if (clearCalcLog) {
    clearCalcLog.addEventListener('click', () => {
      calculationLog = [];
      renderCalculatorLog();
    });
  }

  // Render initial empty log
  renderCalculatorLog();


  // ── 6. Consultation Form Logic (Task 5) ─────────────────
  const consultationForm = document.getElementById('consultationForm');
  const formSuccessCard = document.getElementById('formSuccessCard');
  const successNameSpan = document.getElementById('successNameSpan');
  const successServiceSpan = document.getElementById('successServiceSpan');
  const successEmailSpan = document.getElementById('successEmailSpan');
  const resetFormViewBtn = document.getElementById('resetFormViewBtn');
  const emailInput = document.getElementById('consultationEmail');
  const emailFeedback = document.getElementById('emailFeedback');

  if (consultationForm) {
    consultationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const name = document.getElementById('consultationName').value.trim();
      const email = emailInput.value.trim();
      const serviceSelect = document.getElementById('consultationService');
      const serviceText = serviceSelect.options[serviceSelect.selectedIndex].text;
      const agree = document.getElementById('consultationAgree').checked;

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let isEmailValid = emailPattern.test(email);

      if (!isEmailValid && email !== '') {
        emailInput.setCustomValidity('invalid');
        if (emailFeedback) emailFeedback.textContent = 'Please enter a valid email address (e.g. name@domain.com).';
      } else {
        emailInput.setCustomValidity('');
      }

      if (consultationForm.checkValidity() && isEmailValid) {
        if (successNameSpan) successNameSpan.textContent = name;
        if (successServiceSpan) successServiceSpan.textContent = serviceText;
        if (successEmailSpan) successEmailSpan.textContent = email;

        consultationForm.style.display = 'none';
        if (formSuccessCard) formSuccessCard.style.display = 'block';
      } else {
        consultationForm.classList.add('was-validated');
      }
    });

    emailInput.addEventListener('input', () => {
      emailInput.setCustomValidity('');
    });
  }

  if (resetFormViewBtn) {
    resetFormViewBtn.addEventListener('click', () => {
      if (consultationForm) {
        consultationForm.reset();
        consultationForm.classList.remove('was-validated');
        consultationForm.style.display = 'block';
      }
      if (formSuccessCard) {
        formSuccessCard.style.display = 'none';
      }
    });
  }

});
